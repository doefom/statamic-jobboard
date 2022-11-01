# Jobboard

> Create and manage job postings for your organization with ease by utilizing reusable content blocks and much more.

## Features

This addon does:

- Create and manage job postings with ease
- Utilize reusable content blocks for sections like "Your Responsibilites" and more
- Use multiple locations for a single job posting
- Easily include job posting schema to work with Google for Jobs
- Create one or more job posting templates to display your jobs with

## How to Install

You can search for this addon in the `Tools > Addons` section of the Statamic control panel and click **install**, or run the following command from your project root:

``` bash
composer require doefom/jobboard
```

## How to Use

The first and most important thing to concentrate on is the 'Jobs' collection. This is where you can create new jobs,
publish them and add lots of relevant data to it. To ensure you never find yourself copy-pasting the same contents over
and over again, we introduced the a few other collections:

| Collection             | Use cases in 'Jobs' collection 'job' blueprint             |
|------------------------|------------------------------------------------------------|
| Jobs Reusable Contents | Intro, Responsibilities, Qualifications, Incentives, Outro |
| Jobs Locations         | Locations                                                  |
| Jobs Organizations     | Organization                                               |

## Displaying data with Antlers

There are several ways to access the data of a job or multiple job postings. Let's say you're trying to render a job
posting detail view or looping through the 'jobs' collection. If that's the case, you may take a look at the following
markup, which basically tells you everything you need to know about rendering the data (since it's the known
Antlers stuff anyway):

```html
{{ collection:jobs }}

    <div class="job">
    
        <h1 class="title">{{ title }}</h1>
    
        <div class="locations">
            {{ if is_full_remote }}
                Is full remote
            {{ else }}
            <ul>
                {{ locations }} <li>{{ title }}</li> {{ /locations }}
            </ul>
            {{ /if }}
        </div>
    
        <div class="employment-type">
            {{ employment_type:label }}
        </div>
    
        <div class="published-at">
            Published at: {{ published_at }}
        </div>
    
        <div class="valid-through">
            Valid through: {{ valid_through }}
        </div>
    
        <div class="salary">
            {{ if is_salary_range }}
                {{ min_salary }} - {{ max_salary }}
            {{ else }}
                {{ salary }}
            {{ /if }}
            {{ currency:label }} / {{ unit:label }}
        </div>
    
        <div class="organization">
            {{ organization }}
            <a href="{{ website_url }}">
                <img src="{{ logo_url }}" alt="{{ title }} Logo" class="w-20 h-auto"/>
                {{ title }}
            </a>
            {{ /organization }}
        </div>
    
        <div class="intro">
            {{ if link_reusable_content_intro }}
                {{ reusable_content_intro }} {{ content }} {{ /reusable_content_intro }}
            {{ else }}
                {{ intro }}
            {{ /if }}
        </div>
    
        <div class="responsibilities">
            {{ if link_reusable_content_responsibilities }}
                {{ reusable_content_responsibilities }} {{ content }} {{ /reusable_content_responsibilities }}
            {{ else }}
                {{ responsibilities }}
            {{ /if }}
        </div>
    
        <div class="qualifications">
            {{ if link_reusable_content_qualifications }}
                {{ reusable_content_qualifications }} {{ content }} {{ /reusable_content_qualifications }}
            {{ else }}
                {{ qualifications }}
            {{ /if }}
        </div>
    
        <div class="incentives">
            {{ if link_reusable_content_incentives }}
                {{ reusable_content_incentives }} {{ content }} {{ /reusable_content_incentives }}
            {{ else }}
                {{ incentives }}
            {{ /if }}
        </div>
    
        <div class="outro">
            {{ if link_reusable_content_outro }}
                {{ reusable_content_outro }} {{ content }} {{ /reusable_content_outro }}
            {{ else }}
                {{ outro }}
            {{ /if }}
        </div>
        
    </div>

{{ /collection:jobs }}
```

## Structured Data

To open up the possibility of being listed on Google for Jobs your job's details page will have to include structured
data on the page. You may add the markup via the `job_schema` tag on you page. For example:

```html
<body>

    <div class="job">
    
        <h1>{{ title }}</h1>
        
        ...
        
    </div>

    <!-- Renders structured data required for 'Google for Jobs' -->
    {{ job_schema :id="id" }}
</body>
```

### Note

You MUST provide the job's id as a parameter, otherwise the job schema will not be rendered on the page.
