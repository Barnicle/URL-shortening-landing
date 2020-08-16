import StyledButton from "./styles/StyledButton";
import GeneratedLink from "./styles/GeneratedLink";

const Link = (props) => {
  console.log(props);
  const { hashid, url } = props.props;
  return (
    <GeneratedLink>
      <a>{url}</a>
      <a>{`https://rel.ink/${hashid}`}</a>
      <StyledButton>Copy</StyledButton>
    </GeneratedLink>
  );
};
export default Link;
