import { useState, useEffect } from 'react';

const useSvgAsComponent = (svgUrl) => {
  const [SvgComponent, setSvgComponent] = useState(null);

  useEffect(() => {
    if (!svgUrl) return;

    fetch(svgUrl)
      .then(response => response.text())
      .then(svgText => {
        const svgCode = svgText.replace(/<\?xml.*\?>\n/, '');
        const component = () => (
          <div dangerouslySetInnerHTML={{ __html: svgCode }} />
        );
        setSvgComponent(() => component);
      })
      .catch(error => {
        console.error('Failed to load SVG:', error);
        setSvgComponent(null);
      });
  }, [svgUrl]);

  return SvgComponent;
};

export default useSvgAsComponent;