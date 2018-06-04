import React from 'react';

const UserOutput = (props) => {
    return(
        <div>
            <p>{props.username}</p>
            <p>Donec quis quam ultrices, tristique metus nec, congue libero. Nullam blandit et turpis quis pharetra. Nullam ornare lacus eu tortor hendrerit maximus. Mauris semper gravida efficitur. Donec feugiat lobortis nibh, non rhoncus nisl egestas eget. Donec placerat luctus est, eu elementum tellus mollis at. Integer lorem nisl, eleifend vel sagittis id, lobortis a nisl. Pellentesque condimentum sem sit amet venenatis eleifend. Nunc et magna ut est accumsan vulputate. Vivamus hendrerit nunc mauris, vitae porttitor lectus mattis in. Mauris et quam leo.</p>
        </div>
    );
}

export default UserOutput;