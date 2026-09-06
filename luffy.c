#include <stdio.h>
#include <stdlib.h>

static void clear_screen(void) {
    printf("\033[2J\033[H");
}

static void pause_screen(void) {
    printf("\nPress Enter to return to the main menu...");
    getchar();
}

static void show_header(void) {
    printf("============================================================\n");
    printf("                 NEIL'S PERSONAL PROFILE                   \n");
    printf("============================================================\n");
}

static void show_profile(void) {
    clear_screen();
    show_header();
    printf("\nAbout Me\n");
    printf("---------\n");
    printf("Name              : Neil\n");
    printf("Currently studying : K.S. School of Business Management\n");
    printf("                     and Information Technology\n");
    printf("Focus              : Information Technology + Cyber Security\n");
    printf("\nI am an aspiring technology professional building my skills\n");
    printf("in information technology and cyber security.\n");
    pause_screen();
}

static void show_project(void) {
    clear_screen();
    show_header();
    printf("\nFeatured Project\n");
    printf("-----------------\n");
    printf("Project name: AI-inspired personal portfolio\n");
    printf("\nThis portfolio brings together my studies, photography,\n");
    printf("travel moments, and interest in technology and cyber security.\n");
    pause_screen();
}

static void show_contact(void) {
    clear_screen();
    show_header();
    printf("\nContact Neil\n");
    printf("-------------\n");
    printf("Phone : 9664873633\n");
    printf("Email : dabhinil522@gmail.com\n");
    printf("\nYou are welcome to connect with me about my studies,\n");
    printf("projects, or cyber security.\n");
    pause_screen();
}

static void show_menu(void) {
    printf("\nExplore my profile:\n");
    printf("1. About me\n");
    printf("2. My project\n");
    printf("3. Contact me\n");
    printf("4. Exit\n");
    printf("\nChoose an option: ");
}

int main(void) {
    int choice;

    do {
        clear_screen();
        show_header();
        printf("\nWelcome! This app shares Neil's professional profile.\n");
        show_menu();

        if (scanf("%d", &choice) != 1) {
            printf("\nPlease enter a number from 1 to 4.\n");
            while (getchar() != '\n') {
                /* Discard invalid input. */
            }
            pause_screen();
            continue;
        }
        while (getchar() != '\n') {
            /* Consume the remaining newline. */
        }

        switch (choice) {
            case 1:
                show_profile();
                break;
            case 2:
                show_project();
                break;
            case 3:
                show_contact();
                break;
            case 4:
                clear_screen();
                printf("Thank you for visiting Neil's profile. Goodbye!\n");
                break;
            default:
                printf("\nThat option is not available. Please choose 1 to 4.\n");
                pause_screen();
        }
    } while (choice != 4);

    return EXIT_SUCCESS;
}