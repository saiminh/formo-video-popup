import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps({
      className: 'formo-video-popup',
    }) }>
      <p className="explainer">Video popup block: an overlay covering the full browser window on top of the page.</p>
			<InnerBlocks 
        template={[
          ['core/heading', { placeholder: 'Add a title', level: 1, textAlign: 'center', className: 'formo-video-popup__title' }],
          ['core/video', { align: 'center', className: 'formo-video-popup__video' }],
        ]}
        templateLock="all"
      />
		</div>
	);
}
