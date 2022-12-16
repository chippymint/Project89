constructor(props) {
    super(props);
    this.state = {
        light_theme: true,
        post_id: this.props.post.key
        post_data: this.props.post.value

    };
}