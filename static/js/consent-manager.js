(function () {
  const STORAGE_KEY = 'jm_cookie_preferences_v1';
  const CONSENT_VERSION = 1;
  const ANALYTICS_ID = String.fromCharCode(
    71,
    45,
    68,
    51,
    53,
    48,
    55,
    86,
    90,
    57,
    55,
    68
  );

  const COPY = {
    en: {
      bannerTitle: 'Your privacy choices',
      bannerText:
        'We use necessary cookies for core site functions. Analytics cookies are optional and help improve the site.',
      acceptAll: 'Accept all',
      necessaryOnly: 'Necessary only',
      customize: 'Customize',
      manage: 'Cookie settings',
      modalTitle: 'Cookie Preferences',
      modalText: 'Select which optional cookies you allow.',
      necessaryLabel: 'Necessary cookies (always on)',
      analyticsLabel: 'Analytics cookies (Google Analytics)',
      save: 'Save preferences',
      close: 'Close',
    },
    he: {
      bannerTitle: 'העדפות פרטיות ועוגיות',
      bannerText:
        'אנחנו משתמשים בעוגיות הכרחיות לתפקוד האתר. עוגיות אנליטיקה הן אופציונליות ומסייעות לשפר את האתר.',
      acceptAll: 'אשר הכל',
      necessaryOnly: 'הכרחיות בלבד',
      customize: 'התאמה אישית',
      manage: 'הגדרות עוגיות',
      modalTitle: 'העדפות עוגיות',
      modalText: 'בחרו אילו עוגיות אופציונליות לאפשר.',
      necessaryLabel: 'עוגיות הכרחיות (פעילות תמיד)',
      analyticsLabel: 'עוגיות אנליטיקה (Google Analytics)',
      save: 'שמור העדפות',
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

  function readRecord() {
    return safeParse(window.localStorage.getItem(STORAGE_KEY));
  }

  function normalizePreferences(preferences) {
    return {
      necessary: true,
      analytics: Boolean(preferences && preferences.analytics),
    };
  }

  function saveRecord(preferences) {
    const record = {
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      preferences: normalizePreferences(preferences),
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    return record;
  }

  function getCurrentPreferences() {
    const record = readRecord();
    if (!record || !record.preferences) {
      return normalizePreferences({analytics: false});
    }
    return normalizePreferences(record.preferences);
  }

  function loadAnalyticsIfNeeded() {
    if (window.__jmAnalyticsLoaded) return;
    window.__jmAnalyticsLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer.push(arguments);
    };

    window.gtag('consent', 'default', {
      analytics_storage: 'denied',
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`;
    document.head.appendChild(script);

    window.gtag('js', new Date());
    window.gtag('config', ANALYTICS_ID, {
      anonymize_ip: true,
    });
  }

  function applyPreferences(preferences) {
    if (preferences.analytics) {
      loadAnalyticsIfNeeded();
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted',
        });
      }
      return;
    }
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
      });
    }
  }

  function buildBanner() {
    if (document.getElementById('jm-cookie-banner')) return;
    const banner = document.createElement('div');
    banner.id = 'jm-cookie-banner';
    banner.className = 'jm-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');

    banner.innerHTML = `
      <div class="jm-cookie-banner__inner">
        <div class="jm-cookie-banner__copy">
          <p class="jm-cookie-banner__title">${text.bannerTitle}</p>
          <p class="jm-cookie-banner__text">${text.bannerText}</p>
        </div>
        <div class="jm-cookie-banner__actions">
          <button type="button" class="jm-btn jm-btn--primary" data-jm-cookie-action="accept-all">${text.acceptAll}</button>
          <button type="button" class="jm-btn jm-btn--secondary" data-jm-cookie-action="necessary-only">${text.necessaryOnly}</button>
          <button type="button" class="jm-btn jm-btn--ghost" data-jm-cookie-action="open-modal">${text.customize}</button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);
  }

  function removeBanner() {
    const banner = document.getElementById('jm-cookie-banner');
    if (banner) banner.remove();
  }

  function buildModal() {
    if (document.getElementById('jm-cookie-modal')) return;
    const modal = document.createElement('div');
    modal.id = 'jm-cookie-modal';
    modal.className = 'jm-cookie-modal';
    modal.setAttribute('aria-hidden', 'true');

    modal.innerHTML = `
      <div class="jm-cookie-modal__backdrop" data-jm-cookie-action="close-modal"></div>
      <div class="jm-cookie-modal__panel" role="dialog" aria-modal="true" aria-labelledby="jm-cookie-modal-title">
        <div class="jm-cookie-modal__header">
          <p id="jm-cookie-modal-title" class="jm-cookie-modal__title">${text.modalTitle}</p>
          <button type="button" class="jm-cookie-modal__close" data-jm-cookie-action="close-modal" aria-label="${text.close}">×</button>
        </div>
        <p class="jm-cookie-modal__text">${text.modalText}</p>
        <label class="jm-cookie-option">
          <input type="checkbox" checked disabled />
          <span>${text.necessaryLabel}</span>
        </label>
        <label class="jm-cookie-option">
          <input id="jm-cookie-analytics" type="checkbox" />
          <span>${text.analyticsLabel}</span>
        </label>
        <div class="jm-cookie-modal__actions">
          <button type="button" class="jm-btn jm-btn--primary" data-jm-cookie-action="save-selection">${text.save}</button>
          <button type="button" class="jm-btn jm-btn--secondary" data-jm-cookie-action="accept-all">${text.acceptAll}</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
  }

  function setModalOpen(isOpen) {
    const modal = document.getElementById('jm-cookie-modal');
    if (!modal) return;
    modal.classList.toggle('jm-cookie-modal--open', isOpen);
    modal.setAttribute('aria-hidden', String(!isOpen));
    if (isOpen) {
      const preferences = getCurrentPreferences();
      const analytics = modal.querySelector('#jm-cookie-analytics');
      if (analytics) analytics.checked = preferences.analytics;
    }
  }

  function buildManageButton() {
    if (document.getElementById('jm-cookie-manage')) return;
    const button = document.createElement('button');
    button.id = 'jm-cookie-manage';
    button.className = 'jm-cookie-manage';
    button.type = 'button';
    button.setAttribute('data-jm-cookie-action', 'open-modal');
    button.textContent = text.manage;
    document.body.appendChild(button);
  }

  function setPreferences(preferences) {
    const record = saveRecord(preferences);
    applyPreferences(record.preferences);
    removeBanner();
    setModalOpen(false);
  }

  function onAction(action) {
    if (action === 'accept-all') {
      setPreferences({analytics: true});
      return;
    }
    if (action === 'necessary-only') {
      setPreferences({analytics: false});
      return;
    }
    if (action === 'open-modal') {
      setModalOpen(true);
      return;
    }
    if (action === 'close-modal') {
      setModalOpen(false);
      return;
    }
    if (action === 'save-selection') {
      const analytics = document.getElementById('jm-cookie-analytics');
      setPreferences({analytics: Boolean(analytics && analytics.checked)});
    }
  }

  function bindEvents() {
    document.addEventListener('click', (event) => {
      const actionEl = event.target.closest('[data-jm-cookie-action]');
      if (actionEl) {
        event.preventDefault();
        onAction(actionEl.getAttribute('data-jm-cookie-action'));
        return;
      }

      const openEl = event.target.closest('[data-jm-open-cookie-settings="true"]');
      if (openEl) {
        event.preventDefault();
        setModalOpen(true);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setModalOpen(false);
      }
    });

    window.addEventListener('hashchange', () => {
      if (window.location.hash === '#cookie-settings') {
        setModalOpen(true);
      }
    });
  }

  function init() {
    buildModal();
    buildManageButton();
    bindEvents();

    const record = readRecord();
    if (record && record.preferences) {
      applyPreferences(normalizePreferences(record.preferences));
    } else {
      // Keep analytics opt-in by default, but do not show the cookie notice banner.
      applyPreferences(normalizePreferences({analytics: false}));
    }

    if (window.location.hash === '#cookie-settings') {
      setModalOpen(true);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
