"use client";

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {AlertTriangle, RefreshCw} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function ErrorPage({ error }: { error: Error }) {
    const handleRefresh = () => {
        window.location.reload()
    }

    return (
        <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-screen">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <AlertTriangle className="h-6 w-6 text-destructive" />
                        <CardTitle>Error</CardTitle>
                    </div>
                    <CardDescription>There was a problem loading the kayak rental details.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        We're sorry, but we couldn't fetch the information for this kayak rental. This could be due to a network
                        issue or a problem with our server.
                    </p>
                </CardContent>
                <CardFooter>
                    <Button onClick={handleRefresh} className="w-full">
                        <RefreshCw className="mr-2 h-4 w-4" /> Try Again
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}