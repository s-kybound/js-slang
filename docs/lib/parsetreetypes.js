// \texttt{parsetreetypes.js START} \begin{lstlisting}

// Types used to describe the shape of the parse tree
// that is generated by the parse function in Source 4.

// Program
type Program = Pair<'sequence', Pair<List<Statement>, null>>

// Statement
type Statement =
  | ConstantDeclaration
  | VariableDeclaration
  | FunctionDeclaration
  | ReturnStatement
  | ConditionalStatement
  | WhileLoop
  | ForLoop
  | BreakStatement
  | ContinueStatement
  | Block
  | Expression

type ConstantDeclaration = Pair<'constant_declaration', Pair<Name, Pair<Expression, null>>>
type FunctionDeclaration = Pair<
  'function_declaration',
  Pair<Name, Pair<Parameters, Pair<Block, null>>>
>
type ReturnStatement = Pair<'return_statement', Pair<Expression, null>>
type WhileLoop = Pair<'while_loop', Pair<Expression, Pair<Block, null>>>
type ForLoop = Pair<
  'for_loop',
  Pair<Expression | VariableDeclaration, Pair<Expression, Pair<Expression, Pair<Block, null>>>>
>
type BreakStatement = Pair<'break_statement', null>
type ContinueStatement = Pair<'continue_statement', null>

// Parameters
type Parameters = List<Name>

// If-Statement
type ConditionalStatement = Pair<
  'conditional_statement',
  Pair<Expression, Pair<Block, Pair<Block | ConditionalStatement, null>>>
>

// Block
type Block = Pair<'block', Pair<Program, null>>

// Let
type VariableDeclaration = Pair<'variable_declaration', Pair<Name, Pair<Expression, null>>>

// Assignment
type Assignment = Pair<'assignment', Pair<Name, Pair<Expression, null>>>
type ObjectAssignment = Pair<'object_assignment', Pair<ObjectAccess, Pair<Expression, null>>>

// Expression
type Expression =
  | Literal
  | Name
  | LogicalComposition
  | BinaryOperatorCombination
  | UnaryOperatorCombination
  | Application
  | LambdaExpression
  | ConditionalExpression
  | Assignment
  | ObjectAssignment
  | ObjectAccess
  | ArrayExpression

type Literal = Pair<'literal', Pair<number | string | boolean | null, null>>
type Name = Pair<'name', Pair<string, null>>
type LogicalComposition = Pair<
  'logical_composition',
  Pair<LogicalOperator, Pair<Expression, Pair<Expression, null>>>
>
type BinaryOperatorCombination = Pair<
  'binary_operator_combination',
  Pair<BinaryOperator, Pair<Expression, Pair<Expression, null>>>
>
type UnaryOperatorCombination = Pair<
  'unary_operator_combination',
  Pair<UnaryOperator, Pair<Expression, null>>
>
type Application = Pair<'application', Pair<Expression, Pair<List<Expression>, null>>>
type LambdaExpression = Pair<'lambda_expression', Pair<Parameters, Pair<Statement, null>>>
type ConditionalExpression = Pair<
  'conditional_expression',
  Pair<Expression, Pair<Expression, Pair<Expression, null>>>
>
type ObjectAccess = Pair<'object_access', Pair<Expression, Pair<Expression, null>>>
type ArrayExpression = Pair<'array_expression', Pair<List<Expression>, null>>

// Operators
type LogicalOperator = '&&' | '||'
type BinaryOperator = '+' | '-' | '*' | '/' | '%' | '===' | '!==' | '<' | '>' | '<=' | '>='
type UnaryOperator = '!' | '-unary'

// \end{lstlisting} // \texttt{parsetreetypes.js END}
