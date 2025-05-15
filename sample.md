## 13. HTML Elements

Using HTML for additional interactivity.

<details>
  <summary>Click to expand</summary>
  This is hidden content.
</details>

This is a checkbox - <input type="checkbox" />

### 13.1. Inline HTML

This is an example of <em>inline <strong>HTML</strong> </em> inside a paragraph:

This is a <span style="color: red; font-weight: bold;">red bold text</span> inside a Markdown paragraph.

You can also add **inline images**:

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVQYV2NkgIL//xmCgcxMIHaGCu0F0tMZGRnWgviMIAKoqANIlcM0odGtQMU1jEBFPkCJzTgUwYS9QAoPAHn2BBQeBCn8AFTET0DhR5IUEm21J9DabQQ9Q3TwEBvgACT3J/F3uWU/AAAAAElFTkSuQmCC" alt="Sample Image" width="150" height="150" style="border-radius: 10px;" />

Or create **inline links** with styles:

<a href="https://openai.com" target="_blank" style="color: blue; text-decoration: none; font-weight: bold;">Visit OpenAI</a>

<h3>13.2. Block HTML Elements</h3>

<pre>
Inside pre tag
Indentation and formatting etc. here should be preserved.
      Hmmm...
</pre>

#### Styles

<p style="color: red; border: 1px solid gray; text-align: center; font-weight: bold; font-style: oblique; text-decoration: underline; text-transform: uppercase;">My <s>crazily</s> styled text here. <sup>super</sup> and <sub>sub</sub> </p>

<p>Here is some <span style="text-decoration: overline;">overline text</span>, some <span style="text-decoration: line-through;">line-through text</span>, <span style="text-transform: lowercase;">lower-case</span>, and <mark>marked-text</mark></p>

<p>
Here is an SVG image.
<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='129' height='20' aria-label='downloads: 1.0M'><linearGradient id='b' x2='0' y2='100%'><stop offset='0' stop-color='#bbb' stop-opacity='.1'/><stop offset='1' stop-opacity='.1'/></linearGradient><clipPath id='a'><rect width='129' height='20' fill='#fff' rx='3'/></clipPath><g clip-path='url(#a)'><path fill='#555' d='M0 0h86v20H0z'/><path fill='#4c1' d='M86 0h67v20H86z'/><path fill='url(#b)' d='M0 0h129v20H0z'/></g><g fill='#fff' font-family='Verdana,Geneva,DejaVu Sans,sans-serif' font-size='110' text-anchor='middle' text-rendering='geometricPrecision'><image xlink:href='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6IiBmaWxsPSIjY2IwMDAwIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTcgN2gyNnYyNmgtN1YxNGgtNnYxOUg3eiIvPjwvc3ZnPg==' width='14' height='14' x='5' y='3'/><text x='525' y='150' fill='#010101' fill-opacity='.3' aria-hidden='true' textLength='590' transform='scale(.1)'>downloads</text><text x='525' y='140' textLength='590' transform='scale(.1)'>downloads</text><text x='978' y='142' fill='#010101' fill-opacity='.3' aria-hidden='true' transform='scale(.11)'>1.0M</text><text x='968' y='135' transform='scale(.11)'>1.0M</text></g></svg>
</p>

<hr />

<blockquote>This is a blockquote and a list follows:</blockquote>

<ol>
<li>List item 1</li>
<li>List item 2</li>
</ol>

#### Tables with HTML

<table border="1" cellspacing="0" cellpadding="10">
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Location</th>
    </tr>
    <tr>
        <td>John</td>
        <td align="center">25</td>
        <td>New York</td>
    </tr>
    <tr>
        <td>Alice</td>
        <td>30</td>
        <td>San Francisco</td>
    </tr>
</table>

#### Forms in HTML

<form action="#" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" /><br><br>    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" /><br><br>    
    <input type="submit" value="Submit" />
</form>

### 13.3. Combining Markdown and HTML

> This is a **blockquote** with an embedded **HTML table**:
>
> <table border="1">
>   <tr>
>     <th>Feature</th>
>     <th>Supported</th>
>   </tr>
>   <tr>
>     <td>Markdown</td>
>     <td>✅</td>
>   </tr>
>   <tr>
>     <td>HTML</td>
>     <td>✅</td>
>   </tr>
> </table>

### 13.4. Custom Styling

<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }
    th, td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #f2f2f2;
    }
</style>

## 14. Custom Directives (MDX)

Embedding custom components.

```mdx
<MyComponent title="Hello World" />
```

---

This document covers most of the syntax supported by `mdast`, including extended Markdown features such as GFM, math, diagrams, and MDX components.
