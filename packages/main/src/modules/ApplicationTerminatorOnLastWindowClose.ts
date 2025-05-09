import {AppModule} from '../AppModule.js';
import {ModuleContext} from '../ModuleContext.js';

class ApplicationTerminatorOnLastWindowClose implements AppModule {
  enable({app}: ModuleContext): Promise<void> | void {
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    });
  }
}


export function terminateAppOnLastWindowClose(...args: ConstructorParameters<typeof ApplicationTerminatorOnLastWindowClose>) {
  return new ApplicationTerminatorOnLastWindowClose(...args);
}
