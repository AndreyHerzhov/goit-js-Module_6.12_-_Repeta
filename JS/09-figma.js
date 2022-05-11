 

class SiteConstructor {
    constructor()  { 
        this.wrapper = document.querySelector('.wrapper');
    }
     createHeader = () => {
        return `
         <header>
            <h1>Trainer</h1>
            <div class="actions">
                <button>Google</button>
                <button>AppStore</button>
            </div>
        </header>
        `;
    };
    
     createHeroSection = () => {
        return`
        <section class="hero">
            <h2 class="hero__title">Start to workout</h2>
            <p class="hero__text">This is a template figma file, turned into code using Anima. </p>
            <button class="cta">Get started</button>
            <img src="/images/Image.jpg" alt="" class="hero__workout">
        </section>
        `;
    
    };

    render = () => {
         this.wrapper.insertAdjacentHTML('afterbegin', this.createHeader())
         this.wrapper.insertAdjacentHTML('beforeend', this.createHeroSection())
    }
}
   
    
 
const site = new SiteConstructor()
site.render()




