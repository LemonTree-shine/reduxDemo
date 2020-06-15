var template = document.createElement('template');


class Button extends HTMLElement{
    constructor(){
        super();
        //Dom是否初始化
        this.initDomFlag = false;
    }

    connectedCallback(){
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this.render();
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        //初始化Dom
        this.initDom(this._shadowRoot);
    }
    
    static get observedAttributes() {return ['name']; }

    initDom(rootDom){
        this.$name = rootDom.querySelector(".name");
        this.initDomFlag = true;
    }

    attributeChangedCallback(attrName,oldVal,newVal){
        if(this.initDomFlag){
            this.$name.innerHTML = newVal;
        }
    }

    render(){
        template.innerHTML = `<div>
            <div class="name">${this.getAttribute("name")}</div>
            <slot></slot>
        </div>`;
    }
}

window.customElements.define('my-button', Button);