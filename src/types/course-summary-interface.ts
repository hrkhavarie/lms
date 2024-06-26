import { CourseLevel } from "@/enums/course-level-enums";

export interface CourseSummery  {
    id: SVGAnimatedNumberList,
    title: string,
    courseCategoryId: number,
    duration: string,
    level: string,
    levelNumber: CourseLevel,
    averageReviewRating: number | null ,
    numOfReviews: number | null,
    coverImageId: number | null,
    recordStatus: string,
    slug: string,
    subTitle: string,
    isFree: boolean,
    basePrice: number

}