import { gql } from '@apollo/client';

export const AUTH_LOGIN_ACTION = gql`
	mutation authLoginMutation($payload: AuthLoginPayload!) {
		authLogin(payload: $payload) {
			token
		}
	}
`;

export const CREATE_CUSTOMER_ACTION = gql`
	mutation createCustomerMutation($payload: UserPayload!) {
		createCustomer(payload: $payload) {
			token
		}
	}
`;
