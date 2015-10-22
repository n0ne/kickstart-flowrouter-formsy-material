import TestFormsy from './TestFormsy';

FlowRouter.route('/', {
  action() {
	ReactLayout.render(TestFormsy);
  }
});
