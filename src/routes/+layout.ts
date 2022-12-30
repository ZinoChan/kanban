export const ssr = false;

export function load({ params }: { params: { slug: string } }) {
	if (params.slug) {
		return { isBoardPage: true };
	} else {
		return { isBoardPage: false };
	}
}
