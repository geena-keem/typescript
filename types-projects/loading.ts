{
    type LoadingState = {
        state: 'loading';
    };

    type SuccessState = {
        state: 'success';
        response: {
            body: string;
        };
    };

    type FailState = {
        state: 'fail';
        reason: string;
    }

    type ResourceLoadState = LoadingState | SuccessState | FailState;

    printLoginState({ state: 'loading' });
    printLoginState({ state: 'success', response: { body: 'loaded' } });
    printLoginState({ state: 'fail', reason: 'no network' });

    function printLoginState(state: ResourceLoadState) {
        // if (state.state === 'loading') {
        //     console.log('loading........')
        // } else if (state.state === 'success') {
        //     console.log('loaded!', state.response.body);
        // } else {
        //     console.log('no network', state.reason);
        // }

        switch (state.state) {
            case 'loading':
                console.log('loading....');
                break;
            case 'success':
                console.log(`${state.response.body}!`);
                break;
            case 'fail':
                console.log(`${state.reason}`);
                break;
            default:
                throw new Error(`unknown state: ${state}`);
        }
    }
}
