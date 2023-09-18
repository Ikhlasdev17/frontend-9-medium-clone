export const initialState = {
	posts: [
		{
			id: 1,
			title: 'Javascript is dead?',
			excerpt:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore quasi saepe, praesentium illo odit perspiciatis nihil recusandae mollitia earum?',
			description:
				'<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore quasi saepe, praesentium illo odit perspiciatis nihil recusandae mollitia earum?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore quasi saepe, praesentium illo odit perspiciatis nihil recusandae mollitia earum?</p>',
			image:
				'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*bthRXJ_FBspSEijOWIRM2A.png',
			likes: 0,
			authorName: 'John Doe',
			authorAvatar:
				'https://miro.medium.com/v2/resize:fill:64:64/0*TrCVdFSzwqdsYec6',
		},
	],
}

export const reducer = (state, action) => {
	switch (action.type) {
		case 'CREATE_POST': {
			return {
				...state,
				posts: [action.payload, ...state.posts],
			}
		}
		case 'DELETE_POST': {
			return {
				...state,
				posts: state.posts.filter(item => item.id !== action.payload),
			}
		}
	}
}
