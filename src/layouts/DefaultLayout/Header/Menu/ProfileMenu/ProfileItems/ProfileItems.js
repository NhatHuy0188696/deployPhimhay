import PropTypes from 'prop-types';

function ProfileItems({data}) {
    return  (
        <li>
            <a>{data.name}</a>
        </li>
    )
    
}
ProfileItems.prototype = {
    data:PropTypes.object,
   
}

export default ProfileItems;