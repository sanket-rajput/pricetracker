import React from "react";
import { useRouter } from "next/router";

function SecondPage() {
    const router = useRouter();
    const { title } = router.query;

    return (
        <div style={{marginTop:'200px'}}>
            <h1>Second Page</h1>
            {title && <p>Title received from first page: {title}</p>}
        </div>
    );
}

export default SecondPage;
