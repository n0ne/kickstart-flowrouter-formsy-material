const injectTapEventPlugin = require("react-tap-event-plugin");
const Paper = require('material-ui/lib/paper');
const RaisedButton = require('material-ui/lib/raised-button');
const Styles = require('material-ui/lib/styles');
const Formsy = require('formsy-react');
const FMUI = require('formsy-material-ui');


injectTapEventPlugin();

let { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, FormsySelect, FormsyText, FormsyTime, FormsyToggle } = FMUI;



const TestFormsy = React.createClass({

	childContextTypes: {
		muiTheme: React.PropTypes.object
	},

	getChildContext(){
		return {
			muiTheme: Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme)
		}
	},

	getInitialState: function () {
		return {
			canSumbit: false
		};
	},

	errorMessages: {
		wordsError: "Please only use letters",
		numericError: "Please provide a number",
		urlError: "Please provide a valid URL"
	},

	selectFieldItems: [
		{ payload: 'never', text: 'Never' },
		{ payload: 'nightly', text: 'Every Night' },
		{ payload: 'weeknights', text: 'Weeknights' },
		{ payload: 'weekends', text: 'Weekends' },
		{ payload: 'weekly', text: 'Weekly' }
	],

	styles: {
		paper: {
			width: 300,
			margin: 20,
			padding: 20
		},
		submit: {
			marginTop: 32
		}
	},

	enableButton: function () {
		this.setState({
			canSubmit: true
		});
	},

	disableButton: function () {
		this.setState({
			canSubmit: false
		});
	},

	submitForm: function (data) {
		alert(JSON.stringify(data, null, 4));
	},

	notifyFormError: function (data) {
		console.error('Form error:', data);
	},

	render: function () {
		let styles = this.styles;
		let { wordsError, numericError, urlError } = this.errorMessages;

		return (
			<Paper style={styles.paper}>
				<Formsy.Form
					onValid={this.enableButton}
					onInvalid={this.disableButton}
					onValidSubmit={this.submitForm}
					onInvalidSubmit={this.notifyFormError}
					style={styles.form} >

					<FormsyText
						name='name'
						validations='isWords'
						validationError={wordsError}
						required
						hintText="What is your name?"
						floatingLabelText="Name" />

					<RaisedButton
						style={styles.submit}
						type="submit"
						label="Submit"
						disabled={!this.state.canSubmit} />
				</Formsy.Form>
			</Paper>
		);
	}
});

export default TestFormsy;
