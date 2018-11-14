module.exports = [
  {
    //permission rules for all site parts, ex: articles, admin panel, insights, user info,...
    name: 'string', //admins,moderators,editors,authors,members,visitors,.. or any custom name
    articles: { type: 'Map', of: 'string' }, //{modify,create,delete,scope:overrides rules.scope}
    scope: 'any' // default scope for this rule where this rule is valid ,ex: some groups, some users,...
  }
]
