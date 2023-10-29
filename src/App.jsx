import MarkdownPreview from '@uiw/react-markdown-preview';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
function App() {
	const [text, setText] = useState('');
	const [shouldShowPreview, setShouldShowPreview] = useState(false);
	const buttonStyle = {
		width: '100%',
		maxWidth: '100%',
		padding: '10px',
		backgroundColor: '#007bff',
		color: '#fff',
		border: 'none',
		borderRadius: '5px',
		fontSize: '1rem',
		cursor: 'pointer',
	};
	console.log({
		shouldShowPreview,
	});
	return (
		<main>
			{!shouldShowPreview && (
				<section>
					<Form
						setText={setText}
						setShouldShowPreview={setShouldShowPreview}
					/>
				</section>
			)}
			{shouldShowPreview && (
				<section style={{ padding: '4px' }}>
					<MarkdownPreview source={text} />
					<button
						style={buttonStyle}
						onClick={() => setShouldShowPreview(false)}
					>
						{'Enter text again'}
					</button>
				</section>
			)}
		</main>
	);
}

export default App;

function Form({ setText, setShouldShowPreview }) {
	const textRef = useRef(null);
	const formStyle = {
		width: '97%',
		display: 'flex',
		gap: '8px',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center', // Center horizontally
		paddingTop: '10px',
		backgroundColor: 'rgb(13, 17, 23)', // Dark mode background color
		color: 'white', // Dark mode text color
	};

	const labelStyle = {
		marginBottom: '10px',
		fontSize: '1.2rem',
		width: '100%',
	};

	const textareaStyle = {
		width: '100%',
		maxWidth: '100%',
		padding: '10px',
		border: '1px solid #ccc',
		borderRadius: '5px',
		fontSize: '1rem',
		backgroundColor: '#444', // Dark mode background color for textarea
		color: 'white', // Dark mode text color for textarea
	};

	const buttonStyle = {
		width: '100%',
		maxWidth: '100%',
		padding: '10px',
		backgroundColor: '#007bff', // Dark mode button color
		color: 'white', // Dark mode text color for button
		border: 'none',
		borderRadius: '5px',
		fontSize: '1rem',
		cursor: 'pointer',
	};

	return (
		<main style={formStyle}>
			<form
				style={formStyle}
				onSubmit={e => {
					setText(textRef.current?.value ?? 'Something went wrong');
					setShouldShowPreview(true);
					e.preventDefault();
				}}
			>
				<label htmlFor='textForMarkdown' style={labelStyle}>
					Enter text to preview
				</label>
				<textarea
					id='textForMarkdown'
					placeholder='Enter your markdown text'
					rows={10}
					style={textareaStyle}
					ref={textRef}
				></textarea>
				<button type='submit' style={buttonStyle}>
					{'Preview'}
				</button>
			</form>
		</main>
	);
}

Form.propTypes = {
	setText: PropTypes.func.isRequired,
	setShouldShowPreview: PropTypes.func.isRequired,
};
