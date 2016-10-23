class EduiNameCard extends HTMLElement {
  set user(user) {
    this._user = user;

    this.render();
  }

  get user() {
    return this._user;
  }

  constructor() {
    super();

    this.addEventListener('click', (e) => {
      const target = e.target.tagName;

      if(target === 'BUTTON') {
        const evtObj = new CustomEvent('greet', {
          detail: this.user
        });

        this.dispatchEvent(evtObj);
      }
    });
  }

  render() {
    this.innerHTML = `
      <section class="mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">Welcome to Eduiconf!</h2>
        </div>

        <div class="mdl-card__supporting-text">
          Hello, my name is <b>${this.user.firstName} ${this.user.lastName}</b>, <br>

          and I work at <b>${this.user.company}</b>
        </div>

        <div class="mdl-card__actions">
          <button class="mdl-button  mdl-button--raised mdl-button--colored">
            Say Hi!
          </button>
        </div>
      </section>
    `
  }
}

window.customElements.define('edui-name-card', EduiNameCard);
