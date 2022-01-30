import { gql } from '@apollo/client';
import { BLOG_TYPE } from './type';

export const LIST_BLOG_ACTION = gql`
	${BLOG_TYPE}
	query listBlogQuery {
		listBlog {
			...BlogType
		}
	}
`;

export const VIEW_BLOG_ACTION = gql`
	${BLOG_TYPE}
	query viewBlogQuery($slug: String!) {
		viewBlog(slug: $slug) {
			...BlogType
		}
	}
`;

export const CREATE_BLOG_ACTION = gql`
	${BLOG_TYPE}
	mutation createBlogMutation($payload: BlogPayload!) {
		createBlog(payload: $payload) {
			...BlogType
		}
	}
`;

export const EDIT_BLOG_ACTION = gql`
	mutation editBlogMutation($id: Int!, $payload: BlogPayload!) {
		editBlog(id: $id, payload: $payload) {
			title
		}
	}
`;

export const DELETE_BLOG_ACTION = gql`
	mutation deleteBlogMutation($id: Int!) {
		deleteBlog(id: $id) {
			detail
		}
	}
`;
