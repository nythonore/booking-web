import { gql } from '@apollo/client';

export const BLOG_TYPE = gql`
	fragment BlogType on BlogType {
		id
		title
		slug
		category
		description
		cover
		content
		createdAt
	}
`;
