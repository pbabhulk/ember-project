import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
  model() {
    return ['Test-1', 'Test-2', 'Test-3'];
  }
}
