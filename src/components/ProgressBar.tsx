import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  label: string;
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prevWidth) => {
        if (prevWidth < percentage) {
          return prevWidth + 1;
        } else {
          clearInterval(interval);
          return percentage;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div>
      <p className="flex justify-between">
        {label} <span>{width}%</span>
      </p>
      <div className="bg-gray-700 h-4 rounded-full overflow-hidden">
        <div
          className="bg-blue-500 h-full"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const ProgressBars: React.FC = () => {
  const progressData = [
    { label: 'Expertise in MERN Stack Development', percentage: 85 },
    { label: 'Proficient in Full Stack Development', percentage: 80 },
    { label: 'Quality Web & Mobile Application Development', percentage: 87 },
    { label: 'E-commerce / CMS Development', percentage: 75 },
    { label: 'API Development & Integration', percentage: 75 },
    { label: 'On-time Delivery', percentage: 90 },
  ];

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="space-y-4">
          {progressData.map((progress, index) => (
            <ProgressBar
              key={index}
              label={progress.label}
              percentage={progress.percentage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressBars;
