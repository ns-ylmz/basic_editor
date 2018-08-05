const INITIAL_STATE = {
    count: 3,

    currIndex: 0,
    currOffset: 0,

    indexHistory: [0],
    offsetHistory: [0],

    historyIndex: 0,

    list: [
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae odio eu nisi lacinia sagittis. Donec turpis sem, scelerisque nec lacinia tincidunt, vestibulum sit amet enim. Aliquam ut ullamcorper eros. Cras mollis eleifend efficitur. Maecenas a pretium risus. Maecenas ultrices, mauris at ullamcorper tristique, turpis ipsum mattis odio, at laoreet nunc arcu a lorem. Quisque sodales metus velit. Proin euismod varius volutpat. Fusce dignissim, lorem eget commodo aliquam, dolor risus placerat orci, pharetra facilisis leo neque nec leo. In sapien ligula, pulvinar nec vulputate a, sollicitudin et purus. Quisque pharetra feugiat nulla, eget rutrum nulla malesuada sit amet.'
        }, {
            id: 2,
            text: 'Morbi gravida eleifend augue, et suscipit arcu. Mauris sit amet pellentesque enim, at posuere nulla. Etiam quis ullamcorper nibh. Vivamus vulputate placerat nibh, et placerat lacus molestie et. Vestibulum vulputate vestibulum laoreet. Donec luctus bibendum mi, nec efficitur dolor vehicula vitae. Praesent commodo lorem vel justo consectetur sodales. Fusce interdum purus vel eleifend condimentum. Maecenas a vulputate tortor, nec facilisis sem. Aenean mollis tortor eget ante bibendum, quis accumsan felis pulvinar. Maecenas quis scelerisque lacus. Duis vitae est dui. Proin vitae neque in nisi finibus sollicitudin. Nullam tellus ipsum, viverra id vestibulum quis, pharetra et enim. Praesent tincidunt nisi in odio auctor, nec sollicitudin ante laoreet. Morbi vel nibh bibendum, imperdiet ipsum eu, facilisis nunc.Aenean mollis tortor eget ante bibendum, quis accumsan felis pulvinar. Maecenas quis scelerisque lacus. Duis vitae est dui. Proin vitae neque in nisi finibus sollicitudin. Nullam tellu' 
        }, {
            id: 3,
            text: 'Nulla sed nibh placerat, molestie felis fringilla, suscipit est. Duis at quam aliquet, luctus risus a, convallis purus. Vivamus mollis neque et massa sollicitudin ultricies. Donec posuere, elit a rutrum tincidunt, ante elit sollicitudin lorem, dignissim ornare elit justo maximus arcu. In vel sapien in mauris viverra gravida eu ut lectus. Maecenas commodo dapibus lacus non cursus. In pharetra ex quis massa tincidunt suscipit. Curabitur sit amet pellentesque nisi. Donec non risus non lacus accumsan pharetra nec vitae enim. Maecenas auctor finibus diam, ac ornare metus. Proin sodales nec risus id gravida. Vestibulum vulputate tempus sodales.'
        }
    ], 
    listHistory: [[
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae odio eu nisi lacinia sagittis. Donec turpis sem, scelerisque nec lacinia tincidunt, vestibulum sit amet enim. Aliquam ut ullamcorper eros. Cras mollis eleifend efficitur. Maecenas a pretium risus. Maecenas ultrices, mauris at ullamcorper tristique, turpis ipsum mattis odio, at laoreet nunc arcu a lorem. Quisque sodales metus velit. Proin euismod varius volutpat. Fusce dignissim, lorem eget commodo aliquam, dolor risus placerat orci, pharetra facilisis leo neque nec leo. In sapien ligula, pulvinar nec vulputate a, sollicitudin et purus. Quisque pharetra feugiat nulla, eget rutrum nulla malesuada sit amet.'
        }, {
            id: 2,
            text: 'Morbi gravida eleifend augue, et suscipit arcu. Mauris sit amet pellentesque enim, at posuere nulla. Etiam quis ullamcorper nibh. Vivamus vulputate placerat nibh, et placerat lacus molestie et. Vestibulum vulputate vestibulum laoreet. Donec luctus bibendum mi, nec efficitur dolor vehicula vitae. Praesent commodo lorem vel justo consectetur sodales. Fusce interdum purus vel eleifend condimentum. Maecenas a vulputate tortor, nec facilisis sem. Aenean mollis tortor eget ante bibendum, quis accumsan felis pulvinar. Maecenas quis scelerisque lacus. Duis vitae est dui. Proin vitae neque in nisi finibus sollicitudin. Nullam tellus ipsum, viverra id vestibulum quis, pharetra et enim. Praesent tincidunt nisi in odio auctor, nec sollicitudin ante laoreet. Morbi vel nibh bibendum, imperdiet ipsum eu, facilisis nunc.Aenean mollis tortor eget ante bibendum, quis accumsan felis pulvinar. Maecenas quis scelerisque lacus. Duis vitae est dui. Proin vitae neque in nisi finibus sollicitudin. Nullam tellu' 
        }, {
            id: 3,
            text: 'Nulla sed nibh placerat, molestie felis fringilla, suscipit est. Duis at quam aliquet, luctus risus a, convallis purus. Vivamus mollis neque et massa sollicitudin ultricies. Donec posuere, elit a rutrum tincidunt, ante elit sollicitudin lorem, dignissim ornare elit justo maximus arcu. In vel sapien in mauris viverra gravida eu ut lectus. Maecenas commodo dapibus lacus non cursus. In pharetra ex quis massa tincidunt suscipit. Curabitur sit amet pellentesque nisi. Donec non risus non lacus accumsan pharetra nec vitae enim. Maecenas auctor finibus diam, ac ornare metus. Proin sodales nec risus id gravida. Vestibulum vulputate tempus sodales.'
        }
    ]]
};

export const ParagraphReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case 'Paragraph_SetReducer':
            return {
                ...state,
                ...action.payload
            };

        case 'Paragraph_ResetReducer':
            return INITIAL_STATE;

        default:
            return state;
    }
};