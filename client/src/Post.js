export default function Post(){
    const tempImg = "https://images.unsplash.com/photo-1735437683931-b8a17f57912d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="post">
        <div className="image">
        <img src={tempImg} alt="Thumbnail of post"/></div>
        <div className="content">
          <h2>Foreigners can open rupee a/c in overseas Indian banks </h2>
        <p className="info">
          <a href="/" className="author">Prashant Patil</a>
          <time>18-01-2025 16:52</time>
        </p>
          <p className="summary">
            The Reserve Bank of India has implemented new rules to facilitate
            the use of the rupee in international trade and investment. These
            regulations allow
          </p>
        </div>
      </div>
    )
}