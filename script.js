const schemaTemplates = {
  Organization: {
    description: "Organization schema for a company, brand, or nonprofit.",
    fields: [
      { id: "name", label: "Name", type: "text", placeholder: "Acme Inc." },
      { id: "url", label: "Website URL", type: "url", placeholder: "https://example.com" },
      { id: "logo", label: "Logo URL", type: "url", placeholder: "https://example.com/logo.png" },
      { id: "description", label: "Description", type: "textarea", placeholder: "Short description of your organization." },
      { id: "sameAs", label: "Social URLs (comma-separated)", type: "text", placeholder: "https://twitter.com/acme, https://facebook.com/acme" }
    ]
  },
  WebSite: {
    description: "Website schema for general website markup and search engine understanding.",
    fields: [
      { id: "name", label: "Website Name", type: "text", placeholder: "Example Site" },
      { id: "url", label: "Website URL", type: "url", placeholder: "https://example.com" },
      { id: "description", label: "Description", type: "textarea", placeholder: "What this website is about." }
    ]
  },
  LocalBusiness: {
    description: "LocalBusiness schema for physical stores, restaurants, and service locations.",
    fields: [
      { id: "name", label: "Business Name", type: "text", placeholder: "Acme Coffee" },
      { id: "url", label: "Website URL", type: "url", placeholder: "https://acmecoffee.com" },
      { id: "telephone", label: "Telephone", type: "text", placeholder: "+1-555-123-4567" },
      { id: "streetAddress", label: "Street Address", type: "text", placeholder: "123 Main St" },
      { id: "addressLocality", label: "City", type: "text", placeholder: "San Francisco" },
      { id: "addressRegion", label: "State/Region", type: "text", placeholder: "CA" },
      { id: "postalCode", label: "Postal Code", type: "text", placeholder: "94105" },
      { id: "description", label: "Description", type: "textarea", placeholder: "Short description of the business." }
    ]
  },
  Person: {
    description: "Person schema for authors, speakers, or profile pages.",
    fields: [
      { id: "name", label: "Name", type: "text", placeholder: "Jane Doe" },
      { id: "url", label: "Profile URL", type: "url", placeholder: "https://example.com/jane" },
      { id: "jobTitle", label: "Job Title", type: "text", placeholder: "Content Strategist" },
      { id: "email", label: "Email", type: "email", placeholder: "jane@example.com" },
      { id: "description", label: "Description", type: "textarea", placeholder: "Short biography or profile description." }
    ]
  },
  Article: {
    description: "Article schema for blog posts, news articles, and long-form content.",
    fields: [
      { id: "headline", label: "Headline", type: "text", placeholder: "How to Build SEO-Friendly Schema" },
      { id: "authorName", label: "Author Name", type: "text", placeholder: "Jane Doe" },
      { id: "datePublished", label: "Publish Date", type: "date", placeholder: "2026-05-03" },
      { id: "image", label: "Image URL", type: "url", placeholder: "https://example.com/article-image.jpg" },
      { id: "description", label: "Description", type: "textarea", placeholder: "Summary of the article." }
    ]
  },
  FAQPage: {
    description: "FAQPage schema for frequently asked questions and answers.",
    fields: [
      { id: "headline", label: "Page Title", type: "text", placeholder: "How to start SEO?" }
    ],
    listGroups: [
      {
        id: "mainEntity",
        label: "FAQ items",
        itemLabel: "FAQ item",
        type: "faq",
        itemFields: [
          { id: "question", label: "Question", type: "text", placeholder: "What is schema markup?" },
          { id: "answer", label: "Answer", type: "textarea", placeholder: "Schema markup helps search engines understand content." }
        ]
      }
    ]
  },
  Product: {
    description: "Product schema for online store and product page markup.",
    fields: [
      { id: "name", label: "Product Name", type: "text", placeholder: "Smartwatch Pro" },
      { id: "image", label: "Image URL", type: "url", placeholder: "https://example.com/product.jpg" },
      { id: "description", label: "Description", type: "textarea", placeholder: "Key features and benefits." },
      { id: "sku", label: "SKU", type: "text", placeholder: "SKU-1234" },
      { id: "brand", label: "Brand", type: "text", placeholder: "Acme" }
    ],
    listGroups: [
      {
        id: "offers",
        label: "Offer details",
        itemLabel: "Offer",
        type: "offer",
        itemFields: [
          { id: "price", label: "Price", type: "text", placeholder: "129.99" },
          { id: "priceCurrency", label: "Currency", type: "text", placeholder: "USD" },
          { id: "availability", label: "Availability URL", type: "text", placeholder: "https://schema.org/InStock" },
          { id: "url", label: "Offer URL", type: "url", placeholder: "https://example.com/product" }
        ]
      }
    ]
  },
  Event: {
    description: "Event schema for conferences, concerts, and public meetups.",
    fields: [
      { id: "name", label: "Event Name", type: "text", placeholder: "SEO Conference 2026" },
      { id: "startDate", label: "Start Date/Time", type: "datetime-local", placeholder: "2026-09-23T09:00" },
      { id: "endDate", label: "End Date/Time", type: "datetime-local", placeholder: "2026-09-23T17:00" },
      { id: "locationName", label: "Location Name", type: "text", placeholder: "Convention Center" },
      { id: "description", label: "Description", type: "textarea", placeholder: "A short event summary." }
    ]
  },
  Recipe: {
    description: "Recipe schema for meals, desserts, or cooking tutorials.",
    fields: [
      { id: "name", label: "Recipe Name", type: "text", placeholder: "Chocolate Chip Cookies" },
      { id: "description", label: "Description", type: "textarea", placeholder: "A short recipe summary." },
      { id: "cookTime", label: "Cook Time", type: "text", placeholder: "PT12M" },
      { id: "prepTime", label: "Prep Time", type: "text", placeholder: "PT15M" }
    ],
    listGroups: [
      {
        id: "recipeIngredient",
        label: "Ingredients",
        itemLabel: "Ingredient",
        type: "stringArray",
        itemFields: [
          { id: "ingredient", label: "Ingredient", type: "text", placeholder: "2 cups flour" }
        ]
      },
      {
        id: "recipeInstructions",
        label: "Instructions",
        itemLabel: "Step",
        type: "stringArray",
        itemFields: [
          { id: "instruction", label: "Instruction", type: "textarea", placeholder: "Mix dough, bake at 350°F for 12 minutes." }
        ]
      }
    ]
  },
  JobPosting: {
    description: "JobPosting schema for career listings and open positions.",
    fields: [
      { id: "title", label: "Job Title", type: "text", placeholder: "Senior SEO Specialist" },
      { id: "description", label: "Job Description", type: "textarea", placeholder: "Job responsibilities and requirements." },
      { id: "datePosted", label: "Date Posted", type: "date", placeholder: "2026-05-03" },
      { id: "employmentType", label: "Employment Type", type: "text", placeholder: "FULL_TIME" },
      { id: "hiringOrganizationName", label: "Company Name", type: "text", placeholder: "Acme Inc." }
    ]
  },
  Course: {
    description: "Course schema for online classes, training, and educational resources.",
    fields: [
      { id: "name", label: "Course Name", type: "text", placeholder: "SEO Mastery" },
      { id: "description", label: "Description", type: "textarea", placeholder: "What students will learn." },
      { id: "providerName", label: "Provider Name", type: "text", placeholder: "Acme Academy" },
      { id: "url", label: "Course URL", type: "url", placeholder: "https://example.com/course" }
    ]
  },
  BreadcrumbList: {
    description: "BreadcrumbList schema for page navigation markup.",
    listGroups: [
      {
        id: "itemListElement",
        label: "Breadcrumb items",
        itemLabel: "Breadcrumb",
        type: "breadcrumb",
        itemFields: [
          { id: "position", label: "Position", type: "number", placeholder: "1" },
          { id: "name", label: "Name", type: "text", placeholder: "Home" },
          { id: "item", label: "URL", type: "url", placeholder: "https://example.com" }
        ]
      }
    ]
  },
  Custom: {
    description: "Custom schema type where you can specify a type and additional properties.",
    fields: [
      { id: "customType", label: "Custom @type", type: "text", placeholder: "MyCustomType" },
      { id: "customDescription", label: "Description", type: "textarea", placeholder: "Short description of the custom object." },
      { id: "customFields", label: "Additional properties (JSON object)", type: "textarea", placeholder: "{\"fieldA\":\"value\", \"nested\": {\"sub\": \"value\"}}" }
    ]
  }
};

const schemaTypeSelect = document.getElementById("schemaType");
const fieldContainer = document.getElementById("fieldContainer");
const outputArea = document.getElementById("outputArea");
const showScriptTag = document.getElementById("showScriptTag");
const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const copyButton = document.getElementById("copyButton");

function createField(field) {
  const wrapper = document.createElement("div");
  wrapper.className = "field-block";

  const label = document.createElement("label");
  label.htmlFor = field.id;
  label.className = "field-label";
  label.textContent = field.label;
  wrapper.appendChild(label);

  let input;
  if (field.type === "textarea") {
    input = document.createElement("textarea");
    input.className = "textarea-field";
    input.rows = 4;
  } else {
    input = document.createElement("input");
    input.className = "input-field";
    input.type = field.type || "text";
  }

  input.id = field.id;
  input.placeholder = field.placeholder || "";
  wrapper.appendChild(input);
  return wrapper;
}

function renderFields(schemaType) {
  fieldContainer.innerHTML = "";
  const schema = schemaTemplates[schemaType];
  if (!schema) return;

  const description = document.createElement("p");
  description.className = "schema-description";
  description.textContent = schema.description;
  fieldContainer.appendChild(description);

  if (schema.fields) {
    schema.fields.forEach((field) => {
      fieldContainer.appendChild(createField(field));
    });
  }

  if (schema.listGroups) {
    schema.listGroups.forEach((group) => {
      const groupWrapper = createGroup(group);
      fieldContainer.appendChild(groupWrapper);
      const itemsContainer = groupWrapper.querySelector(`#${group.id}-items`);
      itemsContainer.appendChild(createListItem(group, 0));
    });
  }
}

function createListItem(group, index) {
  const item = document.createElement("div");
  item.className = "group-item";
  item.dataset.groupId = group.id;
  item.dataset.index = index;

  const header = document.createElement("div");
  header.className = "group-item-header";
  const title = document.createElement("span");
  title.textContent = `${group.itemLabel} ${index + 1}`;
  header.appendChild(title);

  if (group.canRemove !== false) {
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-item";
    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
      item.remove();
      updateGroupTitles(group);
    });
    header.appendChild(remove);
  }

  item.appendChild(header);

  group.itemFields.forEach((field) => {
    const wrapper = document.createElement("div");
    wrapper.className = "field-block";

    const label = document.createElement("label");
    label.className = "field-label";
    label.textContent = field.label;
    wrapper.appendChild(label);

    let input;
    if (field.type === "textarea") {
      input = document.createElement("textarea");
      input.className = "textarea-field";
      input.rows = 3;
    } else {
      input = document.createElement("input");
      input.className = "input-field";
      input.type = field.type || "text";
    }

    input.dataset.groupId = group.id;
    input.dataset.fieldId = field.id;
    input.placeholder = field.placeholder || "";
    wrapper.appendChild(input);
    item.appendChild(wrapper);
  });

  return item;
}

function updateGroupTitles(group) {
  const container = document.getElementById(`${group.id}-items`);
  if (!container) return;
  Array.from(container.querySelectorAll(".group-item")).forEach((item, index) => {
    const title = item.querySelector(".group-item-header span");
    if (title) {
      title.textContent = `${group.itemLabel} ${index + 1}`;
    }
  });
}

function createGroup(group) {
  const wrapper = document.createElement("fieldset");
  wrapper.className = "field-group";

  const legend = document.createElement("legend");
  legend.textContent = group.label;
  wrapper.appendChild(legend);

  const container = document.createElement("div");
  container.id = `${group.id}-items`;
  wrapper.appendChild(container);

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.className = "add-field-btn";
  addButton.textContent = `Add ${group.itemLabel}`;
  addButton.addEventListener("click", () => {
    const index = container.querySelectorAll(".group-item").length;
    container.appendChild(createListItem(group, index));
  });
  wrapper.appendChild(addButton);

  return wrapper;
}

function getGroupValues(group) {
  const container = document.getElementById(`${group.id}-items`);
  if (!container) return [];
  return Array.from(container.querySelectorAll(".group-item")).map((item) => {
    const values = {};
    group.itemFields.forEach((field) => {
      const input = item.querySelector(`[data-field-id="${field.id}"]`);
      values[field.id] = input ? input.value.trim() : "";
    });
    return values;
  }).filter((item) => Object.values(item).some(Boolean));
}

function getFieldValue(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : "";
}

function parseJsonValue(input) {
  if (!input) return null;
  try {
    return JSON.parse(input);
  } catch {
    return null;
  }
}

function buildSchema() {
  const schemaType = schemaTypeSelect.value;
  const template = schemaTemplates[schemaType];
  if (!template) return {};

  const schema = {
    "@context": "https://schema.org",
    "@type": schemaType === "Custom" ? getFieldValue("customType") || "Thing" : schemaType
  };

  template.fields.forEach((field) => {
    const value = getFieldValue(field.id);
    if (!value) return;

    if (field.id === "sameAs") {
      schema[field.id] = value.split(",").map((item) => item.trim()).filter(Boolean);
      return;
    }

    if (["recipeIngredient", "recipeInstructions"].includes(field.id)) {
      schema[field.id] = value.split(",").map((item) => item.trim()).filter(Boolean);
      return;
    }

    if (field.id === "mainEntity") {
      const parsed = parseJsonValue(value);
      const entries = Array.isArray(parsed) ? parsed : (parsed ? [parsed] : []);
      schema[field.id] = entries.map((item) => {
        const questionText = item.question || item.name || "";
        const answerText = item.answer || item.acceptedAnswer?.text || "";
        return {
          "@type": "Question",
          "name": questionText,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": answerText
          }
        };
      }).filter((entry) => entry.name && entry.acceptedAnswer.text);
      return;
    }

    if (field.id === "offers") {
      const parsed = parseJsonValue(value);
      if (parsed && typeof parsed === "object") {
        schema[field.id] = { "@type": "Offer", ...parsed };
      } else {
        schema[field.id] = value;
      }
      return;
    }

    if (field.id === "itemListElement") {
      const parsed = parseJsonValue(value);
      schema[field.id] = parsed || [];
      return;
    }

    if (field.id === "locationName") {
      schema.location = {
        "@type": "Place",
        "name": value
      };
      return;
    }

    if (field.id === "authorName") {
      schema.author = {
        "@type": "Person",
        "name": value
      };
      return;
    }

    if (field.id === "hiringOrganizationName") {
      schema.hiringOrganization = {
        "@type": "Organization",
        "name": value
      };
      return;
    }

    if (field.id === "providerName") {
      schema.provider = {
        "@type": "Organization",
        "name": value
      };
      return;
    }

    if (field.id === "customFields") {
      const parsed = parseJsonValue(value);
      if (parsed && typeof parsed === "object") {
        Object.assign(schema, parsed);
      }
      return;
    }

    if (field.id === "customDescription") {
      schema.description = value;
      return;
    }

    if (field.id === "customType") {
      return;
    }

    schema[field.id] = value;
  });

  if (template.listGroups) {
    template.listGroups.forEach((group) => {
      const items = getGroupValues(group);
      if (!items.length) return;

      if (group.type === "faq") {
        schema[group.id] = items.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        })).filter((entry) => entry.name && entry.acceptedAnswer.text);
        return;
      }

      if (group.type === "breadcrumb") {
        schema[group.id] = items.map((item) => ({
          "@type": "ListItem",
          "position": item.position ? Number(item.position) : undefined,
          "name": item.name,
          "item": item.item
        })).filter((entry) => entry.name && entry.item);
        return;
      }

      if (group.type === "offer") {
        const offers = items.map((item) => {
          const offer = { "@type": "Offer" };
          Object.entries(item).forEach(([key, value]) => {
            if (value) offer[key] = value;
          });
          return offer;
        }).filter((offer) => Object.keys(offer).length > 1);
        schema[group.id] = offers.length === 1 ? offers[0] : offers;
        return;
      }

      if (group.type === "stringArray") {
        schema[group.id] = items.map((item) => item[group.itemFields[0].id]).filter(Boolean);
        return;
      }
    });
  }

  if (schemaType === "LocalBusiness") {
    const address = {};
    ["streetAddress", "addressLocality", "addressRegion", "postalCode"].forEach((id) => {
      const value = getFieldValue(id);
      if (value) address[id] = value;
    });
    if (Object.keys(address).length) {
      schema.address = {
        "@type": "PostalAddress",
        ...address
      };
      ["streetAddress", "addressLocality", "addressRegion", "postalCode"].forEach((id) => delete schema[id]);
    }
  }

  return schema;
}

function renderOutput() {
  const schema = buildSchema();
  const formatted = JSON.stringify(schema, null, 2);
  outputArea.textContent = showScriptTag.checked
    ? `<script type="application/ld+json">
${formatted}
</script>`
    : formatted;
}

function resetFields() {
  renderFields(schemaTypeSelect.value);
  outputArea.textContent = "";
}

function copyToClipboard() {
  const text = outputArea.textContent;
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    copyButton.textContent = "Copied!";
    setTimeout(() => {
      copyButton.textContent = "Copy JSON-LD";
    }, 1800);
  });
}

function populateSchemaTypes() {
  Object.keys(schemaTemplates).forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = key;
    schemaTypeSelect.appendChild(option);
  });
}

schemaTypeSelect.addEventListener("change", () => {
  renderFields(schemaTypeSelect.value);
});
generateButton.addEventListener("click", renderOutput);
resetButton.addEventListener("click", resetFields);
copyButton.addEventListener("click", copyToClipboard);
showScriptTag.addEventListener("change", renderOutput);

populateSchemaTypes();
renderFields(schemaTypeSelect.value);
renderOutput();
