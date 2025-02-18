import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="h-[calc(100vh-4rem)] flex bg-emerald-50/50 relative">
            {/* Sidebar Skeleton */}
            <div className="hidden md:flex w-[400px] border-r bg-white flex-col">
                {/* Filters Skeleton */}
                <div className="p-6 border-b shadow-md">
                    <Skeleton className="h-6 w-1/2 mb-4" />
                    <div className="grid grid-cols-2 gap-3">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="flex items-center space-x-2">
                                <Skeleton className="h-4 w-4" />
                                <Skeleton className="h-4 w-20" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Location List Skeleton */}
                <div className="flex-1 bg-gray-50 p-4 space-y-4 overflow-auto">
                    {[...Array(5)].map((_, i) => (
                        <Skeleton key={i} className="h-40 w-full rounded-lg" />
                    ))}
                </div>
            </div>

            {/* Map Skeleton */}
            <div className="flex-1 relative">
                <Skeleton className="absolute inset-0" />

                {/* Map Controls Skeleton */}
                <div className="absolute right-4 top-4 flex flex-col gap-2">
                    {[...Array(3)].map((_, i) => (
                        <Skeleton key={i} className="h-8 w-8 rounded-md" />
                    ))}
                </div>

                {/* Mobile Location Card Skeleton */}
                <div className="absolute z-20 left-1/2 transform -translate-x-1/2 bottom-4 md:hidden">
                    <Skeleton className="h-40 w-80 rounded-lg" />
                </div>
            </div>
        </div>
    )
}

