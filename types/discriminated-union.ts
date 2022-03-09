{
    /**
     * Discriminated Union (유니언 구별)
     * 인터페이스들이 각 공통된 싱글톤 타입(type)을 갖고, Union 타입의 type guards를 사용하여 
     * switch에서 모든 경우의 수를 계산하고 각 인터페이스의 데이터까지 구별할 수 있다.
     */

    // function: login -> success or fail
    type SuccessState = {
        result: 'success'; // +
        response: {
            body: string;
        };
    };
    type FailState = {
        result: 'fail'; // +
        reason: string;
    }
    type LoginState = SuccessState | FailState;

    // function login(id: string, password: string): Promise<LoginState> {
    function login(): LoginState {
        return {
            result: 'success', // +
            response: {
                body: 'logged in!',
            },
        };
    }

    // printLoginState(state: LoginState)
    // success -> success body
    // fail -> reason
    function printLoginState(state: LoginState) {
        if (state.result === 'success') {
            console.log(`${state.response.body}!`)
        } else {
            console.log(`ㅠ_ㅠ${state.reason}`)
        }
    }
}