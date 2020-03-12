# Welcome to forthought
### your companion for daily self-reflection

#### Annika de Vogel, Jules Gilligan, Braden Svoboda, Julia Odden

## Problem Space
In today’s fast-paced world, some people struggle to find the time or the energy to begin self-reflection. Remembering what we do and how we feel on a day-to-day basis without some sort of record is impossible, and that forgetfulness can lead to mindless repetition of old patterns or bad habits. 

There are many applications advertising themselves as diaries or journals. One example is Daybook, which is simply a storage space for whatever text the user inputs. Another one, called Day One Journal, offers an option to enable notifications for daily reminders to write. However, the UI is bland, unattractive, and does not help the user approach the journaling process at all.

#### Our goal was to create an app with an attractive interface to guide people through daily self-reflection.

## User Research

Our research strategy focused on interviews. We asked users a series of questions about their self-reflection habits and limiting factors on their journaling practices. Our main conclusions:
#### People don't know where to begin self-reflecting.
#### People don't have time to do long, freeform entries about their days.
#### People wish they could journal in their daily down-time (waiting in line, waiting at the doctor's office, etc.) but don't carry physical journals with them: just their phones.

## Paper Prototyping

![Paper Prototyping](https://github.com/scribblegeeks/journaling101/blob/master/pics/Paper%20entry%20edit.jpg)

In our paper prototype, people found that editing both the current day's entry and past entries was confusing. They wanted to be able to tap on the text to edit the entry as opposed to having to click around to edit buttons; they wanted button and text-box behaviors to be consistent with other commonly used models. We got good feedback on our calendar implementation (i.e. having the calendar module available to see old entries again). 
#### We learned the importance of universality and consistency in every aspect of our design.

## Digital Prototype

### Login Screen

![Login Screen](https://github.com/scribblegeeks/journaling101/blob/master/pics/Index%20without%20login.png)

![Login Pop-up](https://github.com/scribblegeeks/journaling101/blob/master/pics/Login%20screen.png)

Our login screen, designed based on Salesforce's protocols, includes a simple introduction to our platform and a large LOGIN button. The button takes you to a pop-up with a username/password entry form and options to log in to the program or exit. Upon logging in, users are taken to a custom home screen personalized with their name, a time-sensitive greeting, and a rotating prompt for the day's entry. The home screen has the day's entry and an option to save the entry to the calendar, as well an option to access the calendar, a custom user dropdown, and a sign-out button.
### Calendar

![Calendar](https://github.com/scribblegeeks/journaling101/blob/master/pics/Calendar%20plain.png)

Our first component was the custom calendar. Our aesthetic goal was soothing and minimalist; functionally, you can click to select different dates to view entries, indicate that a day has an entry with a small circle underneath that day, and write new entries or edit old entries by selecting the desired date and editing text by either selecting "edit" or clicking on the text that is already there.
### Branding

![Calendar with Dropdown](https://github.com/scribblegeeks/journaling101/blob/master/pics/Calendar%20with%20profile.png)

We used Salesforce's branding protocols to choose our color scheme, fonts, and spacing and icons for our platform.

## Reflection
In the time we had, we created a visually appealing platform with many of our originally proposed functionalities. If we had more time, we would have inserted an option for adding media to your daily entries (think photos and videos, potentially sound bytes) and included a data-visualization platform to see changes in mood or day quality over time.

## Links
[GitHub Repository](https://github.com/scribblegeeks/journaling101)

[GitHub Demo](https://scribblegeeks.github.io/journaling101/index.html)

**Note:** the demo has been tested on Firefox on Windows, Chrome on Windows, Firefox on Mac, Chrome on Mac, and Safari on Mac.
