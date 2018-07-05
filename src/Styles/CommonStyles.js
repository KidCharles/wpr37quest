import {
	css
} from 'styled-components';

export default {

	flexStyle: css `
		display: flex
	`,

	flexColumn: css `
		flex-direction: column;
	`,


	flex(col = null) {
		let style = this.flexStyle;

		if (col) {
			style += this.flexColumn;
		}

		return style;
	},

	center: css `
		align-content: center;
		align-items: center;
		justify-content: center;
		text-align: center;
	`
}