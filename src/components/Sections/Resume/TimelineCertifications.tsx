import {FC, memo} from 'react';

import {TimelineItemCertification} from '../../../data/dataDef';

const TimelineCertifications: FC<{item: TimelineItemCertification}> = memo(({item}) => {
  const {title, date, provider,dateEnd } = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <h2 className="text-xl font-bold">{provider}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{date}</span>
          <span>-</span>
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{dateEnd}</span>
        </div>
      </div>
    </div>
  );
});

TimelineCertifications.displayName = 'TimelineCertifications';
export default TimelineCertifications;
