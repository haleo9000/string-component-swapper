# string-component-swapper
A functional component which intakes a string and regex expressions and replaces all instances with a component.
## Getting Started
### 1. Install
#### NPM:
```
$ npm install string-component-swapper
```
#### Yarn:
```
$ yarn add string-component-swapper
```
### 2. Import into parent component
```
import StringSwapper from 'string-component-swapper';
```
### 3. Use the StringSwapper to input a string and output the entire string with the found pieces replaced with your own library components.
```
<StringSwapper
  string={incomingString}
  componentFn={this.componentReplacerFunction}
  stringSearchTuple=[RegExp, RegExp]
/>
```

At this time, all properties are required.

The componentFn _must_ return a ReactChild which will be injected into the string when parsed.
The function simply takes the selected fragment of your string and replaces it with a component. The interface looks like the following:
```
(fragment: string) => React.ReactChild
```
The search string tuple requires two RegExp expressions, one which represents the beginning of the string and one which represents the end of the string.
Example search strings might include:
 * a guid - ingesting an error message with a guid or other identifying hashed string you want to truncate or wrap differently than the rest of your error message.
 * a username (think twitter usernames which have a regular search pattern - `@<username>`) that you might want to replace with a link that takes a viewer to the user's homepage or feed.
 * looking for specific terms or phrases you want to link to help or definition files and areas.

