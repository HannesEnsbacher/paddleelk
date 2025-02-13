"use client"; // Ensures this is a Client Component
import { useEffect } from "react";

export default function DevComponent({ locations }: any ) {
    useEffect(() => {

            console.log("Locations loaded:", locations);
            // Perform any action after locations are available (e.g., set map markers)

    }, [locations]); // Runs when locations change

    return <div>Render your map here with locations</div>;
}
