class i {
 constructor(t, e = {}) {
  (this._onHover =
   e.trigger === 'hover' || t.getAttribute('data-trigger') === 'hover'),
   (this._container = i._findParent(t, 'mega-dropdown')),
   this._container &&
    ((this._menu = this._container.querySelector(
     '.dropdown-toggle ~ .dropdown-menu',
    )),
    this._menu &&
     (t.setAttribute('aria-expanded', 'false'),
     (this._el = t),
     this._bindEvents()));
 }
 open() {
  this._timeout && (clearTimeout(this._timeout), (this._timeout = null)),
   this._focusTimeout &&
    (clearTimeout(this._focusTimeout), (this._focusTimeout = null)),
   this._el.getAttribute('aria-expanded') !== 'true' &&
    (this._triggerEvent('show'),
    this._container.classList.add('show'),
    this._menu.classList.add('show'),
    this._el.setAttribute('aria-expanded', 'true'),
    this._el.focus(),
    this._triggerEvent('shown'));
 }
 close(t) {
  this._timeout && (clearTimeout(this._timeout), (this._timeout = null)),
   this._focusTimeout &&
    (clearTimeout(this._focusTimeout), (this._focusTimeout = null)),
   this._onHover && !t
    ? (this._timeout = setTimeout(() => {
       this._timeout && (clearTimeout(this._timeout), (this._timeout = null)),
        this._close();
      }, 150))
    : this._close();
 }
 toggle() {
  this._el.getAttribute('aria-expanded') === 'true'
   ? this.close(!0)
   : this.open();
 }
 destroy() {
  this._unbindEvents(),
   (this._el = null),
   this._timeout && (clearTimeout(this._timeout), (this._timeout = null)),
   this._focusTimeout &&
    (clearTimeout(this._focusTimeout), (this._focusTimeout = null));
 }
 _close() {
  this._el.getAttribute('aria-expanded') === 'true' &&
   (this._triggerEvent('hide'),
   this._container.classList.remove('show'),
   this._menu.classList.remove('show'),
   this._el.setAttribute('aria-expanded', 'false'),
   this._triggerEvent('hidden'));
 }
 _bindEvents() {
  (this._elClickEvnt = (t) => {
   t.preventDefault(), this.toggle();
  }),
   this._el.addEventListener('click', this._elClickEvnt),
   (this._bodyClickEvnt = (t) => {
    !this._container.contains(t.target) &&
     this._container.classList.contains('show') &&
     this.close(!0);
   }),
   document.body.addEventListener('click', this._bodyClickEvnt, !0),
   (this._menuClickEvnt = (t) => {
    t.target.classList.contains('mega-dropdown-link') && this.close(!0);
   }),
   this._menu.addEventListener('click', this._menuClickEvnt, !0),
   (this._focusoutEvnt = () => {
    this._focusTimeout &&
     (clearTimeout(this._focusTimeout), (this._focusTimeout = null)),
     this._el.getAttribute('aria-expanded') === 'true' &&
      (this._focusTimeout = setTimeout(() => {
       document.activeElement.tagName.toUpperCase() !== 'BODY' &&
        i._findParent(document.activeElement, 'mega-dropdown') !==
         this._container &&
        this.close(!0);
      }, 100));
   }),
   this._container.addEventListener('focusout', this._focusoutEvnt, !0),
   this._onHover &&
    ((this._enterEvnt = () => {
     window.getComputedStyle(this._menu, null).getPropertyValue('position') !==
      'static' && this.open();
    }),
    (this._leaveEvnt = () => {
     window.getComputedStyle(this._menu, null).getPropertyValue('position') !==
      'static' && this.close();
    }),
    this._el.addEventListener('mouseenter', this._enterEvnt),
    this._menu.addEventListener('mouseenter', this._enterEvnt),
    this._el.addEventListener('mouseleave', this._leaveEvnt),
    this._menu.addEventListener('mouseleave', this._leaveEvnt));
 }
 _unbindEvents() {
  this._elClickEvnt &&
   (this._el.removeEventListener('click', this._elClickEvnt),
   (this._elClickEvnt = null)),
   this._bodyClickEvnt &&
    (document.body.removeEventListener('click', this._bodyClickEvnt, !0),
    (this._bodyClickEvnt = null)),
   this._menuClickEvnt &&
    (this._menu.removeEventListener('click', this._menuClickEvnt, !0),
    (this._menuClickEvnt = null)),
   this._focusoutEvnt &&
    (this._container.removeEventListener('focusout', this._focusoutEvnt, !0),
    (this._focusoutEvnt = null)),
   this._enterEvnt &&
    (this._el.removeEventListener('mouseenter', this._enterEvnt),
    this._menu.removeEventListener('mouseenter', this._enterEvnt),
    (this._enterEvnt = null)),
   this._leaveEvnt &&
    (this._el.removeEventListener('mouseleave', this._leaveEvnt),
    this._menu.removeEventListener('mouseleave', this._leaveEvnt),
    (this._leaveEvnt = null));
 }
 static _findParent(t, e) {
  if (t.tagName.toUpperCase() === 'BODY') return null;
  for (
   t = t.parentNode;
   t.tagName.toUpperCase() !== 'BODY' && !t.classList.contains(e);

  )
   t = t.parentNode;
  return t.tagName.toUpperCase() !== 'BODY' ? t : null;
 }
 _triggerEvent(t) {
  if (document.createEvent) {
   let e;
   typeof Event == 'function'
    ? (e = new Event(t))
    : ((e = document.createEvent('Event')), e.initEvent(t, !1, !0)),
    this._container.dispatchEvent(e);
  } else this._container.fireEvent(`on${t}`, document.createEventObject());
 }
}
window.MegaDropdown = i;