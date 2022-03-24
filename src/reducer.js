export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 'BQAN3LMFVT2BchBb1lGVCeuC_g_ZEcaaml_fv0ryuTS_5-FFK7Knxgtb6_BIMhWqWAmaH3r1bJPsGEJFgNu2SvIlGtqO2pz6VnkQlZDBc4gJN5rs29RBYL2IQFwiO9l49RLwJ662nvkh0iXNPih1zBNYrqXxZg',
};

const reducer = ( state, action ) => {
    console.log(action);

    //Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return { ...state, user: action.user };
        case 'SET_TOKEN':
            return { ...state, token: action.token};
        case 'SET_PLAYLISTS':
            return { ...state, playlists: action.playlists};
        case 'SET_DISCOVER_WEEKLY':
            return { ...state, discover_weekly: action.discover_weekly}
        default:
            return state;
    }

}

export default reducer;