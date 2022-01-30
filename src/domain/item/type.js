import { gql } from '@apollo/client';

export const ITEM_TYPE = gql`
	fragment ItemType on ItemType {
		id
		title
		slug
		category
		description
		cover
		featured
		price
		country
		city
		location
		gallery
		highlight
		other
		datetime
		createdAt
	}
`;
