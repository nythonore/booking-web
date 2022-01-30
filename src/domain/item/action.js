import { gql } from '@apollo/client';
import { ITEM_TYPE } from './type';

export const LIST_ITEM_ACTION = gql`
	${ITEM_TYPE}
	query listItemQuery($category: String!) {
		listItem(category: $category) {
			...ItemType
		}
	}
`;

export const VIEW_ITEM_ACTION = gql`
	${ITEM_TYPE}
	query viewItemQuery($slug: String!) {
		viewItem(slug: $slug) {
			...ItemType
		}
	}
`;

export const CREATE_ITEM_ACTION = gql`
	${ITEM_TYPE}
	mutation createItemMutation($payload: ItemPayload!) {
		createItem(payload: $payload) {
			...ItemType
		}
	}
`;

export const EDIT_ITEM_ACTION = gql`
	mutation editItemMutation($id: Int!, $payload: ItemPayload!) {
		editItem(id: $id, payload: $payload) {
			title
		}
	}
`;

export const DELETE_ITEM_ACTION = gql`
	mutation deleteItemMutation($id: Int!) {
		deleteItem(id: $id) {
			detail
		}
	}
`;
