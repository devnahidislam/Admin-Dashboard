import {
  Inject,
  SparklineComponent,
  SparklineTooltip,
} from '@syncfusion/ej2-react-charts';
import React from 'react';

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  console.log(data);
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      value="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
      tooltipSettings={{
        visible : true,
        // eslint-disable-next-line no-template-curly-in-string
        format: '${x}: Data ${yval}',
        trackLineSettings: {
          visible: true,
        }
      }}
    >
      <Inject services={[SparklineTooltip]}/>
    </SparklineComponent>
  );
};

export default SparkLine;
