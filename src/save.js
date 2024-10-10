import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
	return (
		<div { ...useBlockProps.save({
      className: 'formo-video-popup',
    }) }>
      <button className="formo-video-popup__close" aria-label="Close video popup">X</button>
      <button className="formo-video-popup__playbtn" aria-label="Play video">▶︎</button>
			<InnerBlocks.Content />
		</div>
	);
}
