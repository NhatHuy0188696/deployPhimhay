import classNames from 'classnames/bind';
import Style from './containerLevel.module.scss';

import Filmlevel_1 from './level_1/filmlevel_1';
import Filmlevel_2 from './level_2/filmlevel_2';
import Filmlevel_3 from './level_3/filmlevel_3';

const cx = classNames.bind(Style);

function ContainerLevel() {
  
    return (
        <div className={cx('filmsLevel')}>
          <Filmlevel_1 Level={1} Name={"Học tiếng anh Level 1"} />
            <Filmlevel_2  Level={2} Name={"Học tiếng anh Level 2"} />
            <Filmlevel_3 Level={3} Name={"Học tiếng anh Level 3"}></Filmlevel_3>
        </div>
    );
}

export default ContainerLevel;
