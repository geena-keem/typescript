namespace Union {
    /**
     * Union Types: OR
     */
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }
    move('up');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 32;



    // function: login -> success or fail
    type SuccessState = {
        response: {
            body: string;
        };
    };
    type FailState = {
        reason: string;
    }
    type LoginState = SuccessState | FailState;

    // function login(id: string, password: string): Promise<LoginState> {
    function login(): LoginState {
        return {
            response: {
                body: 'logged in!',
            },
        };
    }

    // printLoginState(state: LoginState)
    // success -> success body
    // fail -> reason
    function printLoginState(state: LoginState) {
        if ('response' in state) {
            console.log(`${state.response.body}!`)
        } else {
            console.log(`ㅠ_ㅠ${state.reason}`)
        }
    }
}