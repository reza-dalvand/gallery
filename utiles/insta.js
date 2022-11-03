import React from 'react';


const InstaDownloader = () => {

    const [state, setState] = {
        media: {},
        downloadProgress: 0,
        count: 0
    };

    getInstagramInfo = instagramUrl => {
        setState(...state,
            {
                count: state.count + 1
            },
        );
        let urlRequest = instagramUrl.split('/?')[0] + '?__a=1';
        if (!urlRequest.includes('https://www.instagram.com/p')) {
            showMessage({
                message: 'Error. Invalid url',
                type: 'danger'
            });
            return;
        }

        fetch(urlRequest)
            .then(res => res.json())
            .then(data => {
                let infoResource = {};
                if (data.graphql.shortcode_media.__typename === 'GraphSidecar') {
                    let images = data.graphql.shortcode_media.edge_sidecar_to_children.edges.map(
                        item => item.node.display_url
                    );
                    infoResource.type = 'GraphSidecar';
                    infoResource.data = images;
                } else if (data.graphql.shortcode_media.__typename === 'GraphImage') {
                    let imageUrl = data.graphql.shortcode_media.display_url;
                    infoResource.type = 'GraphImage';
                    infoResource.data = [imageUrl];
                } else {
                    let videoUrl = data.graphql.shortcode_media.video_url;
                    infoResource.type = 'GraphVideo';
                    infoResource.data = [videoUrl];
                }
                setState(...state, {
                    media: infoResource
                });
            })
            .catch(err => {
                showMessage({
                    message: 'Error. Please try again',
                    type: 'danger'
                });
            });
    };

    downloadFile = async (url, mediaType) => {
        let cameraPermissions = await Permissions.getAsync(Permissions.CAMERA_ROLL);
        if (cameraPermissions.status !== 'granted') {
            cameraPermissions = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        }

        if (cameraPermissions.status === 'granted') {
            FileSystem.downloadAsync(
                url,
                FileSystem.documentDirectory +
                uuid() +
                (mediaType === 'GraphVideo' ? '.mp4' : '.jpg')
            )
                .then(async ({ uri }) => {
                    await CameraRoll.saveToCameraRoll(uri);
                    showMessage({
                        message: 'File successfully downloaded',
                        type: 'success'
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            alert('Requires file permission');
        }
    };

    return (<></>);
}

export { InstaDownloader };