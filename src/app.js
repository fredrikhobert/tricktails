export class App {

  configureRouter(config, router) {
    config.title = 'Tricktails';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'about',         name: 'about',        moduleId: 'about',        nav: true, title: 'About' },
      { route: 'dogs',        name: 'dogs',           moduleId: 'dogs',         nav: true, title: 'Dogs' }
    ]);

    this.router = router;
  }


  toggleMenu() {    
    $("#wrapper").toggleClass("toggled");
  }

}
