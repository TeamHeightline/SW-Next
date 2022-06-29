export interface IFindInCourse {
    "course_name": string,
    "course_id": number,
    "position": {
        "activePage": number,
        "selectedRow": number,
        "selectedPage": number,
        "selectedIndex": number
    }
}

export interface ICardData {
    "id": number,
    "title": string,
    "text": string,
    "video_url": string,
    "site_url": string,
    "created_by_id": number,
    "additional_text": string,
    "card_content_type": number,
    "is_card_use_additional_text": boolean,
    "is_card_use_main_content": boolean,
    "is_card_use_main_text": boolean,
    "is_card_use_test_before_card": boolean,
    "is_card_use_test_in_card": boolean,
    "test_before_card_id": number,
    "test_in_card_id": number,
    "arrow_before": string,
    "arrow_down": string,
    "arrow_next": string,
    "arrow_up": string,
    "copyright": string,
    "is_card_use_copyright": boolean,
    "is_card_use_arrow_navigation": boolean,
    "hard_level": number,
    "card_before_id": number,
    "card_down_id": number,
    "card_next_id": number,
    "card_up_id": number,
    "tag_field": string,
    "users_customuser": {
        "id": number,
        "user_access_level": string,
        "users_userprofile": {
            "user_id": number,
            "firstname": string,
            "lastname": string,
            "avatar_src": string,
            "study_in_id": number
        }
    },
    "themeString": string,
    "findInCourse": IFindInCourse[],
    cards_cardimage?: {
        image: string,
        card_id: number
    }
}

interface cards_unstructuredtheme {
    text: string
}

export interface ICardDataWithTheme extends ICardData {
    cards_card_connected_theme: cards_unstructuredtheme[]
}
