
// Skapa ett interface som beskriver komponentens "props"
interface Props {
	heading: string;
}

// Två sätt att skriva props:
// props: Props
// { heading }: Props
const BlogItem = ({ heading }: Props) => (
	<div>
		{heading}
	</div>
)

export default BlogItem
