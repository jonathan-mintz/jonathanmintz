(function () {
  const STORAGE_KEY = 'jm_cookie_preferences_v2';
  const ANALYTICS_ID = 'G-D3507VZ97D';
  const GA_DISABLE_KEY = `ga-disable-${ANALYTICS_ID}`;

  const COPY = {
    en: {
      manage: 'Cookie settings',
      title: 'Analytics cookies',
      description: 'Google Analytics is enabled by default. You can opt out at any time.',
      enabled: 'Enabled',
      disabled: 'Disabled',
      disableAnalytics: 'Disable analytics',
      enableAnalytics: 'Enable analytics',
      close: 'Close',
    },
    he: {
      manage: 'הגדרות עוגיות',
      title: 'עוגיות אנליטיקה',
      description: 'Google Analytics פעיל כברירת מחדל. ניתן לכבות בכל רגע.',
      enabled: 'פעיל',
      disabled: 'כבוי',
      disableAnalytics: 'כיבוי אנליטיקה',
      enableAnalytics: 'הפעלת אנליטיקה',
      close: 'סגירה',
    },
  };

  const locale = (document.documentElement.lang || 'en').toLowerCase().startsWith('he')
    ? 'he'
    : 'en';
  const text = COPY[locale];

  function safeParse(raw) {
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch (_error) {
      return null;
    }
  }

  function readStorageValue() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (_error) {
      return null;
    }
  }

  function writeStorageValue(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
      return true;
    } catch (_error) {
      return false;
    }
  }

  function getDefaultPreferences() {
    return {analytics: true};
  }

  function normalizePreferences(preferences) {
    if (!preferences || typeof preferences !== 'object') {
      return getDefaultPreferences();
    }
    return {
      analytics: preferences.analytics !== false,
    };
  }

  function readPreferences() {
    const parsed = safeParse(readStorageValue());
    return normalizePreferences(parsed);
  }

  function savePreferences(preferences) {
    const normalized = normalizePreferences(preferences);
    writeStorageValue(JSON.stringify(normalized));
    return normalized;
  }

  function clearGoogleAnalyticsCookies() {
    const cookieNames = document.cookie
      .split(';')
      .map((part) => part.trim().split('=')[0])
      .filter((name) => name && (name === '_ga' || name.startsWith('_ga_')));

    if (!cookieNames.length) return;

    const host = window.location.hostname;
    const hostParts = host.split('.');
    const rootDomain =
      hostParts.length > 2 ? `.${hostParts.slice(hostParts.length - 2).join('.')}` : `.${host}`;
    const domains = Array.from(new Set([undefined, host, `.${host}`, rootDomain]));

    cookieNames.forEach((name) => {
      domains.forEach((domain) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${
          domain ? `; domain=${domain}` : ''
        }`;
      });
    });
  }

  function updateAnalyticsConsent(enabled, reconfigure) {
    window[GA_DISABLE_KEY] = !enabled;

    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: enabled ? 'granted' : 'denied',
      });
      if (enabled && reconfigure) {
        window.gtag('config', ANALYTICS_ID);
      }
    }

    if (!enabled) {
      clearGoogleAnalyticsCookies();
    }
  }

  function buildUi() {
    if (document.getElementById('jm-cookie-manage')) return;

    const manageButton = document.createElement('button');
    manageButton.id = 'jm-cookie-manage';
    manageButton.className = 'jm-cookie-manage';
    manageButton.type = 'button';
    manageButton.textContent = text.manage;

    const panel = document.createElement('div');
    panel.id = 'jm-cookie-panel';
    panel.className = 'jm-cookie-panel';
    panel.setAttribute('aria-hidden', 'true');
    panel.innerHTML = `
      <p class="jm-cookie-panel__title">${text.title}</p>
      <p class="jm-cookie-panel__text">${text.description}</p>
      <p class="jm-cookie-panel__status"><strong id="jm-cookie-status"></strong></p>
      <div class="jm-cookie-panel__actions">
        <button type="button" id="jm-cookie-toggle" class="jm-cookie-btn jm-cookie-btn--primary"></button>
        <button type="button" id="jm-cookie-close" class="jm-cookie-btn jm-cookie-btn--ghost">${text.close}</button>
      </div>
    `;

    document.body.appendChild(manageButton);
    document.body.appendChild(panel);
  }

  function setPanelOpen(isOpen) {
    const panel = document.getElementById('jm-cookie-panel');
    if (!panel) return;

    panel.classList.toggle('jm-cookie-panel--open', isOpen);
    panel.setAttribute('aria-hidden', String(!isOpen));
  }

  function syncUi(preferences) {
    const status = document.getElementById('jm-cookie-status');
    const toggle = document.getElementById('jm-cookie-toggle');

    if (!status || !toggle) return;

    status.textContent = preferences.analytics ? text.enabled : text.disabled;
    toggle.textContent = preferences.analytics ? text.disableAnalytics : text.enableAnalytics;
  }

  function applyPreferences(preferences, options) {
    const shouldReconfigure = Boolean(options && options.reconfigure);
    updateAnalyticsConsent(preferences.analytics, shouldReconfigure);
    syncUi(preferences);
  }

  function bindEvents() {
    const manageButton = document.getElementById('jm-cookie-manage');
    const panel = document.getElementById('jm-cookie-panel');
    const toggle = document.getElementById('jm-cookie-toggle');
    const close = document.getElementById('jm-cookie-close');

    if (!manageButton || !panel || !toggle || !close) return;

    manageButton.addEventListener('click', () => {
      const isOpen = panel.classList.contains('jm-cookie-panel--open');
      setPanelOpen(!isOpen);
    });

    close.addEventListener('click', () => {
      setPanelOpen(false);
    });

    toggle.addEventListener('click', () => {
      const current = readPreferences();
      const next = savePreferences({analytics: !current.analytics});
      applyPreferences(next, {reconfigure: true});
    });

    document.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const openFromLink = target.closest('[data-jm-open-cookie-settings="true"]');
      if (openFromLink) {
        event.preventDefault();
        setPanelOpen(true);
        return;
      }

      if (
        panel.classList.contains('jm-cookie-panel--open') &&
        !target.closest('#jm-cookie-panel') &&
        !target.closest('#jm-cookie-manage')
      ) {
        setPanelOpen(false);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setPanelOpen(false);
      }
    });

    window.addEventListener('hashchange', () => {
      if (window.location.hash === '#cookie-settings') {
        setPanelOpen(true);
      }
    });
  }

  function init() {
    buildUi();
    bindEvents();

    const saved = safeParse(readStorageValue());
    const initial =
      saved && typeof saved === 'object' ? normalizePreferences(saved) : savePreferences(getDefaultPreferences());
    applyPreferences(initial, {reconfigure: false});

    if (window.location.hash === '#cookie-settings') {
      setPanelOpen(true);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
